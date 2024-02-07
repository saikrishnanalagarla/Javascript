Global with sharing class BatchApex implements Database.Batchable<SObject> {
    /*
    *  Author:-SaiKrishna
    *  Description:- This class about BatchUpdates
    *  Created :- 
    *  Last Updated :
    */
    Global Database.QueryLocator start(Database.BatchableContext bContext){

      string query='Select Id, Name, Website,Fax FROM Account';
        return Database.getQueryLocator(query);
    }
    Global void execute(Database.BatchableContext bContext,list<SObject> recordsToProcess){
        //To store updated values
        if (!recordsToProcess.isEmpty()) {
            List<Account> listAccountToUpdate=new List<Account>();
            for (SObject records : recordsToProcess) {
                Account accRecords=(Account)records;
                accRecords.Website='www.forsyssinc.com';
                accRecords.Sic='Manufacturing';
                listAccountToUpdate.add(accRecords);
            }
            if(!listAccountToUpdate.isEmpty()){
                update listAccountToUpdate;
            }
        }
    }
    Global void finish(Database.BatchableContext db){
        Id jobId=db.getJobId();
        AsyncApexJob jobdetails=[SELECT ID,STATUS,TotalJobItems,NumberOfErrors FROM AsyncApexJob WHERE ID=:jobId];


    }

}