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
                    
                    sh '''
                        curl -X POST https://api.render.com/deploy/srv-crnb8ed6l47c73acpgd0?key=Z1Gmn2hWrv8
                    '''
                    } 
        }

   
          
    }
    
}