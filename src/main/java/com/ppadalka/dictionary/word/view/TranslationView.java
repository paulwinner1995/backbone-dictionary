package com.ppadalka.dictionary.word.view;

public class TranslationView {
    private String value;
    private String language;

    public TranslationView() {
    }

    public TranslationView(String value, String language) {
        this.value = value;
        this.language = language;
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
}
