<?php

namespace Drupal\rhd_text_description_paragraph\Plugin\Field\FieldType;

use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\DataDefinition;

/**
 * Plugin implementation of the 'text_long_constrained' field type.
 *
 * @FieldType(
 *   id = "text_long_constrained",
 *   label = @Translation("Text (formatted, long, constrained)"),
 *   description = @Translation("This field is for BATMAN!!!!S"),
 *   category = @Translation("Text"),
 *   default_widget = "text_textarea",
 *   default_formatter = "text_default"
 * )
 */
class TextLongConstrainedItem extends FieldItemBase {

    /**
     * {@inheritdoc}
     */
    public static function schema(FieldStorageDefinitionInterface $field_definition) {
        dpm($field_definition->getPropertyDefinitions());
        return array(
            'columns' => array(
                'value' => array(
                    'type' => 'text',
                    'size' => 'tiny',
                    'length' => $field_definition->getSetting('max_length'),
                ),
            ),
        );
    }

    /**
     * {@inheritdoc}
     */
    public function isEmpty() {
        $value = $this->get('value')->getValue();
        return $value === NULL || $value === '';
    }

    /**
     * {@inheritdoc}
     */
    public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
        $properties['value'] = DataDefinition::create('string')
            ->setLabel(t('Hex value'));

        return $properties;
    }



}
