# Last Minute Study Platform

> **Cram smarter, not harder.**  
> This platform helps you turn your study materials into panic notes, chat-ready knowledge bases, and auto-generated quizzes — just in time before the exam.

---

## Overview

The **Last Minute Study Platform** helps you **cram efficiently** by transforming your study materials (**PDF, DOCX, PPTX**) into:
- Concise **panic notes**
- A **CramBot** (chat-ready RAG assistant)
- An intelligent **Quizzard** (quiz generator)

It features a **Flask backend** for document ingestion, processing, and RAG using **ChromaDB + Gemini**, and a **Next.js frontend** that delivers a slick, modern UI for uploading, chatting, and quizzing.

---

## Key Features
- **Upload documents:** PDF, DOCX, PPTX supported — including **scanned PDFs (OCR)**  
- **Panic Notes:** Generate consolidated summaries & tables, downloadable as DOCX  
- **CramBot:** Chat with your content using **RAG (ChromaDB + Gemini)**  
- **Quizzard:** Auto-generate MCQs by topic and difficulty  
- **Session management:** Each upload session stores all your files, processed text, and outputs  
- **File exports:** Download consolidated notes and tables per session  
- **Image relevance:** Smart image insertion via **CLIP similarity scoring**

---

## Tech Stack

### Backend
- Python 3.x, Flask, flask-cors  
- google-generativeai *(Gemini)*  
- ChromaDB + tiktoken  
- PyMuPDF (fitz), Camelot, pytesseract  
- python-docx, python-pptx  
- transformers *(distilbart-cnn-12-6)*  
- PIL/Pillow, OpenCV (indirect), pandas  

### Frontend
- Next.js (App Router), React, TypeScript  
- Tailwind CSS, shadcn/ui  
- axios for API calls  

---

## Setup
### Prerequisites
- **Python 3.10+**
- **Node.js 18+**
- System dependencies:
  - [Tesseract OCR](https://tesseract-ocr.github.io/)
  - [Ghostscript](https://www.ghostscript.com/) (for Camelot lattice mode)
  - [Poppler](https://poppler.freedesktop.org/) (PDF utilities)

---

## Backend Setup
```bash
# 1. Create and activate a virtual environment
python -m venv .venv
source .venv/bin/activate   # macOS/Linux
.venv\Scripts\activate      # Windows
# 2. Install dependencies
pip install --upgrade pip
pip install -r backend/requirements.txt
````

### Environment Variables
Create a `.env` file inside `backend/` (or project root):
```bash
GEMINI_API_KEY=your_gemini_api_key
SECRET_KEY=change-me
```

### Run the Backend
```bash
cd backend
python app.py
```
**API Base URL:** `http://localhost:8000/api`

---

## Frontend Setup
```bash
cd frontend
npm install
```

### Environment Variables
Create `.env.local` in `frontend/`:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Run the Frontend
```bash
npm run dev
```
**App URL:** [http://localhost:3000](http://localhost:3000)

---

## How to Use
1. **Upload Documents**
   * Go to *Upload*, choose your files (PDF/DOCX/PPTX)
   * The backend creates a session and indexes your content in **ChromaDB**
2. **Generate Panic Notes**
   * Navigate to *Panic Notes*
   * Backend summarizes your text → generates:
     * `consolidated_notes.docx` (notes + images)
     * `consolidated_tables.docx` (all tables)
   * Download from provided links
3. **Chat with CramBot**
   * Open *CramBot* tab and start asking questions
   * Responses are grounded in your uploaded materials (RAG + Gemini)
4. **Generate a Quiz**
   * Go to *Quizzard*
   * Choose topic + difficulty → get auto-generated MCQs
5. **End Session**
   * Use *Logout* to clear session files, outputs, and embeddings

---

## Scripts & Commands
### Backend
```bash
python backend/app.py
```

### Frontend
```bash
npm run dev
```

## Future Scope
- **Multimodal Chatbot**: Text + image understanding using CLIP, BLIP
- **Smart Flashcards**: Auto-generated from content
- **Personalized Quiz Analytics**: Targeted improvement suggestions
- **Flowchart Generator**: Visualize your notes
