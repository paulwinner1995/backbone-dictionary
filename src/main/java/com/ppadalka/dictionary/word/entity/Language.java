package com.ppadalka.dictionary.word.entity;

import java.util.Arrays;
import java.util.Objects;

public enum Language {
    RUS(1, "Russian"), ENG(2, "English");

    private Integer id;
    private String name;

    Language(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public static Language valueOf(Integer id) {
        return Arrays.stream(values())
                .filter(value -> Objects.equals(id, value.getId()))
                .findAny()
                .orElseThrow(() -> new IllegalArgumentException("Can`t find Language with id: " + id));
    }
}
