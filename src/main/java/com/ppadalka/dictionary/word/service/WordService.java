package com.ppadalka.dictionary.word.service;

import com.ppadalka.dictionary.word.entity.Language;
import com.ppadalka.dictionary.word.view.WordView;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface WordService {

    WordView create(WordView wordView);

    WordView update(WordView wordView);

    WordView findOne(Long id);

    Page<WordView> findAll(String word, Language language, Pageable pageable);
}
