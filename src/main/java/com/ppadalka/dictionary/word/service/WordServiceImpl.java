package com.ppadalka.dictionary.word.service;

import com.ppadalka.dictionary.word.entity.Language;
import com.ppadalka.dictionary.word.entity.Word;
import com.ppadalka.dictionary.word.repository.WordRepository;
import com.ppadalka.dictionary.word.view.TranslationView;
import com.ppadalka.dictionary.word.view.WordView;
import com.ppadalka.dictionary.word.view.converter.WordConverter;
import com.ppadalka.dictionary.word.view.converter.WordViewConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WordServiceImpl implements WordService {
    private final WordRepository wordRepository;
    private final WordConverter wordConverter;
    private final WordViewConverter wordViewConverter;

    @Autowired
    public WordServiceImpl(
            WordRepository wordRepository,
            WordConverter wordConverter,
            WordViewConverter wordViewConverter) {
        this.wordRepository = wordRepository;
        this.wordConverter = wordConverter;
        this.wordViewConverter = wordViewConverter;
    }

    @Override
    public WordView findOne(Long id) {
        Assert.notNull(id, "Id can`t be null");
        Word word = wordRepository.findOne(id);
        return wordViewConverter.convert(word);
    }

    @Override
    public WordView create(WordView wordView) {
        Word newWord = save(wordView);

        List<Word> translations = wordView.getTranslationsStream()
                .map(translation -> constructTranslation(newWord, translation))
                .collect(Collectors.toList());

        wordRepository.save(translations);

        newWord.addAllTranslations(translations);

        Word wordWithTranslations = wordRepository.save(newWord);

        return wordViewConverter.convert(wordWithTranslations);
    }

    private Word constructTranslation(Word translatedWord, TranslationView translationView) {
        Language translationLanguage = Language.valueOf(translationView.getLanguage());
        return new Word(translationView.getValue(), translationLanguage, translatedWord);
    }

    @Override
    public WordView update(WordView wordView) {
        return null;
    }

    private Word save(WordView wordView) {
        Word newWord = wordConverter.convert(wordView);
        return wordRepository.save(newWord);
    }

    @Override
    public Page<WordView> findAll(Pageable pageable) {
        return wordRepository.findAll(pageable).map(wordViewConverter);
    }
}
