package com.ppadalka.dictionary.word.view.converter;

import com.ppadalka.dictionary.word.entity.Word;
import com.ppadalka.dictionary.word.view.WordView;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Component
public class WordViewConverterImpl implements WordViewConverter {
    @Override
    public WordView convert(Word word) {
        Long id = word.getId();
        String value = word.getValue();
        String language = word.getLanguage().getName();
        List<String> translations = word.getTranslationsStream()
                .map(Word::getValue)
                .collect(toList());
        return new WordView(id, value, language, translations);
    }
}