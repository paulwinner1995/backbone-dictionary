package com.ppadalka.dictionary.word.view.converter;

import com.ppadalka.dictionary.word.entity.Word;
import com.ppadalka.dictionary.word.view.WordView;
import org.springframework.core.convert.converter.Converter;

public interface WordViewConverter extends Converter<Word, WordView> {
}
