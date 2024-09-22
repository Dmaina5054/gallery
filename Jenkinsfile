pipeline {
    agent any
    stages {
        //install dependencies
        stage ('Build') {
            steps {
                sh 'npm install'

            }  

        }

        //test
        stage ('Test') {
            steps {
                sh 'npm test'
            }

        }
        //deploy to render cloud
        stage('Deploy to Render'){
            steps{
               withCredentials([usernameColonPassword(credentialsId: 'render-deploy-hook', variable: 'PASS')]) {
                    
                    sh '''
                        curl -X POST https://api.render.com/deploy/srv-crnb8ed6l47c73acpgd0?key=${PASS} -vvv
                    '''
                    } 
            }
        }

   
          
    }
    
}