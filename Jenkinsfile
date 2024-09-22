pipeline {
    agent any
    stages {
        //install dependencies
        stage ('Build') {
            steps {
                sh 'npm install'

            }
          

        }
        //deploy
        stage ('Deploy')
            steps {
                sh 'npm run start'
            }

    }
    
}