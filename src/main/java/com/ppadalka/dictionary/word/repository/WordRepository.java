package com.ppadalka.dictionary.word.repository;

import com.ppadalka.dictionary.word.entity.Word;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface WordRepository extends PagingAndSortingRepository<Word, Long>, QueryByExampleExecutor<Word> {}
