import createElement from '../utils/createElement';
import { tabManager } from '../../main';


export const FilterFieldTypes = {
    Search: {
        element: {
            tagName: 'input',
            classes: ['filter-field-type-search'],
            attributes: {
                type: 'search'
            }
        },
        getValue: (inputElement) => inputElement.value,
        setValue: (inputElement, value) => (inputElement.value = value)
    },
    Select: {
        element: {
            tagName: 'select',
            classes: ['filter-field-type-select']
        },
        getValue: (inputElement) => inputElement.value,
        setValue: (inputElement, value) => (inputElement.value = value)
    }
};


const FilterForm = ({
    filterCallback = (formData) => null,
    fields = {},
    filters = {},
    ...otherParams
}) => {
    const fetchFormData = (formElement) => {
        return [...formElement.querySelectorAll('.field-input')].reduce((formData, inputElement) => {
            const fieldName = inputElement.getAttribute('name');
            const fieldType = fields[fieldName].type;
            formData[fieldName] = {
                value: fieldType.getValue(inputElement),
                hasFocus: inputElement === document.activeElement
            };
            return formData;
        }, {});
    };

    const children = Object.entries(fields).map(([fieldName, {
        type, // 'search' | 'select'
        label = fieldName,
        isLabelVisible = true,
        choices = {}, // only for type 'select'
        canSelectMultiple = false // only for type 'select'
    }]) => {
        const fieldId = `filter-form__${fieldName}`;
        return {
            tagName: 'div',
            classes: ['form-field', 'filter-field'],
            attributes: {
                'data-field-name': fieldName
            },
            children: [
                {
                    tagName: 'label',
                    text: label,
                    classes: ['field-label'],
                    attributes: {
                        [isLabelVisible ? null : 'hidden']: '',
                        for: fieldId
                    }
                },
                {
                    ...type.element,
                    classes: ['field-input'],
                    attributes: {
                        name: fieldName,
                        id: fieldId,
                        [canSelectMultiple ? 'multiple' : null]: '',
                        value: filters[fieldName]?.value || ''
                    },
                    listeners: [
                        {
                            event: 'input',
                            callback: (event) => {
                                const formElement = event.target.closest('form');
                                const formData = fetchFormData(formElement);
                                return filterCallback(formData);
                            }
                        }
                    ]
                }
            ]
        };
    });
    
    return createElement({
        tagName: 'form',
        classes: ['filter-form'],
        children
    });
};


export default FilterForm;
