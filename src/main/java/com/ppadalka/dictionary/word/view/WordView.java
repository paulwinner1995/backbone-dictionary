package com.ppadalka.dictionary.word.view;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class WordView {
    private Long id;
    private String value;
    private String language;
    private List<TranslationView> translations;

    public WordView() {
        this.translations = new ArrayList<>();
    }

    public WordView(Long id, String value, String language, List<TranslationView> translations) {
        this.id = id;
        this.value = value;
        this.language = language;
        this.translations = new ArrayList<>(translations);
    }

    public WordView(Long id, String value, String language, TranslationView...translations) {
        this(id, value, language, Arrays.asList(translations));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public List<TranslationView> getTranslations() {
        return translations;
    }

    public void setTranslations(List<TranslationView> translations) {
        this.translations = translations;
    }

    public Stream<TranslationView> getTranslationsStream() {
        return translations.stream();
    }
}
