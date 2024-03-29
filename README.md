# NLP Project

This repository contains code for a Natural Language Processing (NLP) project.

## Biomedical NER Demo

### Overview
This project demonstrates a Named Entity Recognition (NER) system for biomedical text using the Hugging Face API.

### How to Use
1. Visit the [live demo](https://saieiei.github.io/NLP/). or click on (https://saieiei.github.io/NLP/)
2. In the demo, you'll see a text box. Paste the following data into the text box: or you may write your text and see how the machine works

    ```plaintext
    A 63-year-old male patient without smoking or drinking history was admitted on June 11, 2014.
    His major complaints were gradually aggravated dysphagia and fatigue, on suspicion of obstructive disease in upper digestive tract.
    He had been an athlete before, and then retired in good physical status before admission.
    His family and social history indicated nothing abnormal.
    Thorough physical examination of his skin, oral mucosa, eyes, and genital areas failed to identify any superficial lesions.
    Additionally, laboratory tests including hepatic function, renal function, and serum tumor markers such as carcinoembryonic antigen, cytokeratin    19 fragment, squamous cell carcinoma, neuron-specific enolase, and carbohydrate antigen 125 were all in normal range.
    Therefore, further endoscopic and radiological examinations were carried out for accurate diagnosis.
    Endoscopic examination revealed a slightly pigmented, irregular mass, which was located in lower esophagus, measuring 5.0 cm × 3.0 cm in size.
    Fine needle biopsy of the lesion revealed esophageal melanoma, which was confirmed by histopathology.
    Besides chest and abdomen computed tomography (CT), enhanced cranial magnetic resonance image (MRI) and bone emission computed tomography (ECT) showed enlarged mediastinal, nd also celiac lymph nodes (Fig.1A), without obvious involvement of supraclavicular lymph nodes.
    Concurrently, the CT showed an isolated, irregular pulmonary tumor (Fig.1B).
    Positron emission tomography was not carried out, because it was not covered by health insurance of this patient.
    Therefore, this patient was clinically staged as cT3NxM1 according to the 7th edition of American Joint Committee on Cancer TNM staging system for esophageal cancer.
    CT-guided percutaneous pulmonary biopsy was avoided, with the aim to diminish the risk of tumor dissemination.
    Single-stage resection of the esophageal and pulmonary lesions was assumed to be reasonable after multidisciplinary consultation, which was approved by Ethical Committee of Xuzhou Central Hospital.
    Because the prognosis of this patient probably was extremely poor without targeted antibodies, which he could not afford for financial reasons.
    After his informed consent, simultaneous Ivor-Lewis esophagectomy and right upper lobectomy were performed successfully, under general anesthesia, after double-lumen endotracheal intubation, followed by systemic dissection of lymph nodes located in mediastinum and abdomen, in accordance with the principles of oncological surgery.
    The operation time was 290 minutes, without obvious bleeding during the surgery.
    Postoperative pathological staining of the specimen revealed pleomorphic cells and abundant melanin granules (Fig.1C), whereas immunohistochemical tests demonstrated positive expression of human melanoma black 45 (HMB45), microtubule-associated protein tau 1 (MAPT1), melan A and S100, and negative expression of desmin, synaptophysin, and epithelial membrane antigen (EMA), which was consistent with melanoma.
    The resection margin and dissected lymph nodes were pathologically tumor-negative.
    In addition, molecular study of the patient indicated mutation of V-raf murine sarcoma viral oncogene homolog B1 (BRAF) V600E.
    Based on these findings, a diagnosis of advanced PMME was tentatively established as stage IV (pT3N0M1), because there was insufficient evidence to distinguish synchronous primary pulmonary melanoma from metastasis for this patient.
    The postoperative recovery was mainly uneventful, and the patient was discharged 14 days after surgery.
    Subsequently, 4 cycles of adjuvant conventional chemotherapy with an interval of 3 weeks were completed, with controlled moderate toxic effects including thrombocytopenia, leukopenia, nausea, vomiting, and diarrhea.
    The detailed chemotherapy regimen is as follows: paclitaxel liposome for injection on day 1 and day 8 (135 mg per square meter of body surface area; Nanjing Luye Sike Pharmaceutical Co., Ltd., Jiangsu, China.), tegafur injection on day 2 to 4 (1000 mg per square meter of body-surface area; Shandong Qilu Pharmaceutical     Co., Ltd., Jinan, China.) plus cis-platinum on day 2 to 3 (75 mg per square meter of body-surface area; Shandong Qilu Pharmaceutical Co., Ltd., Jinan, China).
    This patient suffered from moderate leukopenia/ myelosuppression after the second cycle of TPF chemotherapy, and he recovered quickly after the administration of granulocyte colony-stimulating factor (G-CSF).
    Concurrently, recombinant human interferon alpha-2b (Harbin pharmaceutical group biological engineering Co., Ltd, Harbin, China) was administrated via hypodermic injection thereafter (6000 units every 3 days; Fig.2), lasting for 1 year.
    The patient was followed up continuously after the surgery.
    Chest and abdomen CT, cranial MRI, bone ECT, and thorough physical examination were carried out every 3 months.
    Encouragingly, the patient survived without loco-regional recurrence or remote metastasis during the follow-up of two and a half years up to now (Fig.3).
    ```

3. After pasting the data, click the 'Fetch Data' button.
4. The entities will be highlighted and grouped based on the NER system's analysis.

### Technologies Used
- Python
- Streamlit
- Hugging Face API

## Live Demo
Visit the [live demo](https://saieiei.github.io/NLP/) to see the project in action.

## Getting Started

### Prerequisites
- Python
- Streamlit

### Installation
1. Clone the repository:

```bash
git clone https://github.com/saieiei/NLP.git
