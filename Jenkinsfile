pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/chetnagoli123/digital-reading-hub.git'
            }
        }

        stage('Build Docker Containers') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }

    }
}