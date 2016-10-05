package com.ppadalka.dictionary.word.entity.converter;

import com.ppadalka.dictionary.word.entity.Language;

import javax.persistence.AttributeConverter;

public class LanguageConverter implements AttributeConverter<Language, Integer> {

    @Override
    public Integer convertToDatabaseColumn(Language language) {
        return language.getId();
    }

    @Override
    public Language convertToEntityAttribute(Integer integer) {
        return Language.valueOf(integer);
    }
}
