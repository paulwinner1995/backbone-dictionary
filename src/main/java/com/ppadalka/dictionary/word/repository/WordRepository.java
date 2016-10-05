package com.ppadalka.dictionary.word.repository;

import com.ppadalka.dictionary.word.entity.Word;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordRepository extends PagingAndSortingRepository<Word, Long> {
}
