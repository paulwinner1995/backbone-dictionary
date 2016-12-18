package com.ppadalka.dictionary.word.entity;

import java.util.Arrays;
import java.util.Objects;

public enum Language {
    RUS(1), ENG(2);

    private Integer id;

    Language(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public static Language valueOf(Integer id) {
        return Arrays.stream(values())
                .filter(value -> Objects.equals(id, value.getId()))
                .findAny()
                .orElseThrow(() -> new IllegalArgumentException("Can`t find Language with id: " + id));
    }
}
