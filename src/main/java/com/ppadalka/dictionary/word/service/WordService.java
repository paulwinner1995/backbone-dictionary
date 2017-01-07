package com.ppadalka.dictionary.word.service;

import com.ppadalka.dictionary.word.entity.Language;
import com.ppadalka.dictionary.word.view.WordView;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface WordService {

    WordView create(WordView wordView);

    WordView update(WordView wordView);

    WordView findOne(Long id);

    /**
     * Finds page of dictionary by given params
     *
     * @param filter   - value for filtering dictionary
     * @param language - {@link com.ppadalka.dictionary.word.entity.Language language} type
     *                   for search by
     * @param pageable - {@link org.springframework.data.domain.Pageable pageable} object
     *                   for find requested page
     *
     * @return {@link org.springframework.data.domain.Page page} of dictionary
     */
    Page<WordView> findAll(String filter, Language language, Pageable pageable);
}
