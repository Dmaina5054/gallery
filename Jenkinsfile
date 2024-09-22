pipeline {
    agent any
    stages {
        //install dependencies
        stage ('Build') {
            steps {
                sh 'npm install'

            }  

        }
        //deploy to render cloud
        stage('Deploy to Render'){
            steps{
               withCredentials([usernameColonPassword(credentialsId: 'renderid', variable: 'PASS')]) {
                    
                    sh 'curl ${PASS} -vvv' } 
            }
        }

   
          
    }
    
}