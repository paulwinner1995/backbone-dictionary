package com.ppadalka.dictionary.word.rest;

import com.ppadalka.dictionary.word.entity.Language;
import com.ppadalka.dictionary.word.service.WordService;
import com.ppadalka.dictionary.word.view.WordView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/word")
public class WordResource {
    private final WordService wordService;

    @Autowired
    public WordResource(WordService wordService) {
        this.wordService = wordService;
    }

    @GetMapping(path = "/{wordId}")
    public WordView get(@PathVariable("wordId") Long id) {
        return wordService.findOne(id);
    }

    @GetMapping
    public Page<WordView> getPage(@RequestParam(value = "lang", required = false, defaultValue = "English") String language,
                                      Pageable pageable) {
        return wordService.findAll(pageable);
    }

    @PostMapping
    public WordView save(@RequestBody WordView wordView) {
        return wordService.create(wordView);
    }

    @PutMapping
    public WordView update(@RequestBody WordView wordView) {
        return wordService.update(wordView);
    }
}
