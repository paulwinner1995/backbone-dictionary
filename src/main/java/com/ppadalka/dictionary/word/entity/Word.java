package com.ppadalka.dictionary.word.entity;

import com.ppadalka.dictionary.word.entity.converter.LanguageConverter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;

@Entity
@Table(name = "WORD")
@SequenceGenerator(
        name = "WORD_TABLE_SEQUENCE_GENERATOR",
        sequenceName = "WORD_TABLE_SEQUENCE",
        allocationSize = 1
)
public class Word implements Serializable {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "WORD_TABLE_SEQUENCE_GENERATOR"
    )
    @Column(name = "WORD_ID")
    private Long id;
    @Column(name = "VALUE")
    private String value;
    @Column(name = "LANGUAGE", nullable = false)
    @Convert(converter = LanguageConverter.class)
    private Language language;
    // TODO: Should investigate how I can make mapping for this relation
    private List<Word> translation;

    public Word() {
        this.translation = new ArrayList<>();
    }

    public Word(String value, Language language, Word translation) {
        super();
        this.value = value;
        this.language = language;
        this.translation.add(translation);
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

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public void addTranslation(Word translation) {
        this.translation.add(translation);
    }

    public Stream<Word> getTranslationsStream() {
        return this.translation.stream();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (!(obj instanceof Word))
            return false;
        Word otherWord = (Word) obj;
        return Objects.equals(value, otherWord.getValue()) &&
                Objects.equals(language, otherWord.getLanguage());
    }

    @Override
    public int hashCode() {
        return Objects.hash(value, language);
    }
}
