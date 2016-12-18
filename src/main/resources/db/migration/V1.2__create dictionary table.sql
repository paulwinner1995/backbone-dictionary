CREATE TABLE public.dictionary (
  word_id BIGINT NOT NULL,
  translation_id BIGINT NOT NULL,
  FOREIGN KEY (word_id) REFERENCES public.word (word_id)
  MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
  FOREIGN KEY (translation_id) REFERENCES public.word (word_id)
  MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);