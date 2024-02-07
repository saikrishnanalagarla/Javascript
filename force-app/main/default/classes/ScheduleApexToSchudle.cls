Global with sharing class ScheduleApexToSchudle implements System.Schedulable{

    Global void execute(System.SchedulableContext sContext){
        BatchApexToCalculateTotalAnnualRevenue bc=new BatchApexToCalculateTotalAnnualRevenue();
        Database.executeBatch(bc);
    }
}