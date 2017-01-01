package com.ppadalka.dictionary.word.rest;

import com.ppadalka.dictionary.word.entity.Language;
import com.ppadalka.dictionary.word.service.WordService;
import com.ppadalka.dictionary.word.view.WordView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static org.apache.commons.lang.StringUtils.EMPTY;

@RestController
@RequestMapping(path = "/words")
public class WordResource {
    private final WordService wordService;

    @Autowired
    public WordResource(WordService wordService) {
        this.wordService = wordService;
    }

    @GetMapping(path = "/{wordId}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public WordView get(@PathVariable("wordId") Long id) {
        return wordService.findOne(id);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<WordView> getPage(@RequestParam(value = "word", required = false, defaultValue = EMPTY) String word,
                                  @RequestParam(value = "lang", required = false, defaultValue = "ENG") String lang,
                                  Pageable pageable) {
        Language language = Language.valueOf(lang);
        return wordService.findAll(word, language, pageable);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public WordView save(@RequestBody WordView wordView) {
        return wordService.create(wordView);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public WordView update(@RequestBody WordView wordView) {
        return wordService.update(wordView);
    }
}
