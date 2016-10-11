package com.ppadalka.dictionary.word.view.converter;

import com.ppadalka.dictionary.word.entity.Language;
import com.ppadalka.dictionary.word.entity.Word;
import com.ppadalka.dictionary.word.view.WordView;
import org.springframework.stereotype.Component;

@Component
public class WordConverterImpl implements WordConverter {

    @Override
    public Word convert(WordView wordView) {
        Language wordLanguage = Language.valueOf(wordView.getLanguage());

        Word newWord = new Word();
        newWord.setValue(wordView.getValue());
        newWord.setLanguage(wordLanguage);
        return newWord;
    }
}