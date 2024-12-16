# python-deep-learning-chatbot
A deep learning chatbot created with Python and Flask
Project Structure Make sure your project structure looks like this:
```
dl_chatbot/
├── cb/
│   ├── app.py
│   ├── chatbot.py
│   ├── chatbot_model.h5
│   ├── classes.pkl
│   ├── words.pkl
│   ├── job_intents.json
│   ├── static/
│   └── templates/
├── requirements.txt
├── Procfile
└── README.md
```

To get started follow the steps below:

1. Install a virtual environment by runnning the following
```
virtualenv chatbotenv
source chatbotenv/bin/activate
```

2. Install all the required libraries 
```
pip install nltk
pip install numpy
pip install keras
pip install tensorflow
pip install flask
```

Run the chatbot.py file to create the model
```
python chatbot.py
```

Run the APP to create a Flask front end on port 8888 (or any port the app is pointing to)
```
python app.py
```

