package com.ppadalka.dictionary.word.entity;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import static org.junit.Assert.*;

public class LanguageTest {

    @Rule
    public ExpectedException exception = ExpectedException.none();

    @Test
    public void shouldReturnRussianLanguage() {
        // when
        Language russian = Language.valueOf(1);
        // then
        assertEquals(Language.RUS, russian);
    }

    @Test
    public void shouldReturnEnglishLanguage() {
        // when
        Language english = Language.valueOf(2);
        // then
        assertEquals(Language.ENG, english);
    }

    @Test
    public void shouldThrowIllegalArgumentExceptionWhenIdIsIncorrect() {
        // given
        exception.expect(IllegalArgumentException.class);
        // when
        Language.valueOf(-1);
    }
}