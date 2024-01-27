# biomed_ner_app.py

import streamlit as st
from transformers import pipeline, AutoTokenizer, AutoModelForTokenClassification

# Load the tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("d4data/biomedical-ner-all")
model = AutoModelForTokenClassification.from_pretrained("d4data/biomedical-ner-all")

# Create a pipeline for NER
pipe = pipeline("ner", model=model, tokenizer=tokenizer, aggregation_strategy="simple")

# Streamlit app
st.title("Biomedical Named Entity Recognition")

# Input text
input_text = st.text_area("Enter text for NER:", "The patient reported no recurrence of palpitations at follow-up 6 months after the ablation.")

# Perform NER on the input text
if st.button("Perform NER"):
    entities = pipe(input_text)
    st.subheader("Named Entities:")
    for entity in entities:
        st.write(f"Entity: {entity['word']}, Label: {entity['entity']}, Score: {entity['score']}")

# Instructions
st.markdown(
    """
    Instructions:
    1. Enter text in the input box.
    2. Click the 'Perform NER' button to identify named entities in the text.
    """
)
