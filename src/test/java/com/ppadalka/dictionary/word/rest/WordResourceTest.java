package com.ppadalka.dictionary.word.rest;

import com.ppadalka.dictionary.word.entity.Language;
import com.ppadalka.dictionary.word.service.WordService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultActions;

import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.eq;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(WordResource.class)
@EnableSpringDataWebSupport
public class WordResourceTest {

    private static final String WORD_PARAM_NAME = "word";

    private static final String LANGUAGE_PARAM_NAME = "lang";

    private static final String PAGE_PARAM_NAME = "page";

    private static final String SIZE_PARAM_NAME = "size";

    @Autowired
    private MockMvc mvc;
    @MockBean
    private WordService wordService;

    // TODO: finish this test
    @Test
    public void shouldGetPageByGivenLanguage() throws Exception {
//        // given
//        given(wordService.findAll(eq("spring"), eq(Language.ENG), any(Pageable.class)))
//                .willReturn(null);
//
//        RequestBuilder requestBuilder = get("/words")
//                .param(WORD_PARAM_NAME, "spring")
//                .param(LANGUAGE_PARAM_NAME, "ENG")
//                .param(PAGE_PARAM_NAME, "0")
//                .param(SIZE_PARAM_NAME, "5");
//        // when
//        ResultActions resultActions = mvc.perform(requestBuilder);
//        // then
//        resultActions
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
//                .andExpect(content().json(""));
    }

    @Test
    public void shouldGetBedRequestWhenGivenLanguageIsIncorrect() throws Exception {
        // given
        RequestBuilder requestBuilder = get("/words")
                .param(LANGUAGE_PARAM_NAME, "foo")
                .param(PAGE_PARAM_NAME, "0")
                .param(SIZE_PARAM_NAME, "5");
        // when
        ResultActions resultActions = mvc.perform(requestBuilder);
        // then
        resultActions
                .andExpect(status().isBadRequest());
    }
}