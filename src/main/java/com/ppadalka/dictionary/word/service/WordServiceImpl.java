package com.ppadalka.dictionary.word.service;

import com.ppadalka.dictionary.word.entity.Word;
import com.ppadalka.dictionary.word.repository.WordRepository;
import com.ppadalka.dictionary.word.view.WordView;
import com.ppadalka.dictionary.word.view.converter.WordConverter;
import com.ppadalka.dictionary.word.view.converter.WordViewConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

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
        return save(wordView);
    }

    @Override
    public WordView update(WordView wordView) {
        return save(wordView);
    }

    private WordView save(WordView wordView) {
        Word newWord = wordConverter.convert(wordView);
        Word savedWord = wordRepository.save(newWord);
        return wordViewConverter.convert(savedWord);
    }

    @Override
    public Page<WordView> findAll(Pageable pageable) {
        return wordRepository.findAll(pageable).map(wordViewConverter);
    }
}
