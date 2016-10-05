package com.ppadalka.dictionary.word.view;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class WordView {
    private final Long id;
    private final String value;
    private final String language;
    private final List<String> translations;

    public WordView(Long id, String value, String language, List<String> translations) {
        this.id = id;
        this.value = value;
        this.language = language;
        this.translations = new ArrayList<>(translations);
    }

    public WordView(Long id, String value, String language, String...translations) {
        this(id, value, language, Arrays.asList(translations));
    }

    public Long getId() {
        return id;
    }

    public String getValue() {
        return value;
    }

    public String getLanguage() {
        return language;
    }

    public List<String> getTranslations() {
        return translations;
    }
}
