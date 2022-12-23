import createElement from '../utils/createElement';


export const FilterFieldTypes = {
    Search: {
        element: {
            tagName: 'input',
            classes: ['filter-field-type-search'],
            attributes: {
                type: 'search'
            }
        }
    }
};


const FilterForm = ({
    fields = {}
}) => {
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
                    attributes: {
                        name: fieldName,
                        id: fieldId
                    }
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
