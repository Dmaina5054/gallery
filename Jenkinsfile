pipeline {
    agent any
    stages {
        //install dependencies
        stage ('Build') {
            steps {
                sh 'npm install'

            }  

        }

        //test code
        stage ('Test') {
            steps {
                sh 'npm test'
            }

        }
        //deploy to render cloud
        stage('Deploy to Render'){
            steps{
               withCredentials([string(credentialsId: 'render_deploy_url', variable: 'SECRET')]) {
                    
                    sh '''
                        curl -X POST ${SECRET} -vvv
                    '''
                    } 
            }
        }
          
    }
    
}