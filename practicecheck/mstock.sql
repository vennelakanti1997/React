create database mstockdb;
use mstockdb;
show tables;
select * from companydetails;
describe companystocks;
describe companydetails;
describe companywatchlist;
describe user;
insert into user
values
(1,"chandu@crypto.com","chandu123"),
(2,"satoshi@crypto.com","satoshi123");
select * from user;
insert into companywatchlist
values
(1,1,1),
(2,2,2),
(3,3,1);
/*insert into companywatchlist(company_companyId,user_id)
values(1,2);*/
select * from companywatchlist;
/*delete from companywatchlist where company_companyId=1 and user_id=2;*/
/*delete from companywatchlist where id=9;*/
insert into companydetails

values
(1,"BITCOIN(BTC)",35000,"cryptocurrency-satoshi, 21 million bitcoins, blockchain, decentralization"),
(2,"ETHEREUM(ETH)",800,"cryptocurrency-ether, unlimited, backed by gas, soliditry, smart contracts etc"),
(3,"RIPPLE(XRP)","1","cryptocurrency , payment protocol, Ripple Labs Inc.");

insert into companydetails

values
(4,"BITCOIN(BTC)1",35000,"cryptocurrency-satoshi, 21 million bitcoins, blockchain, decentralization"),
(5,"ETHEREUM(ETH)1",800,"cryptocurrency-ether, unlimited, backed by gas, soliditry, smart contracts etc");
select * from companydetails;
insert into companystocks
values
(1,"2021-02-13",47667,1),
(2,"2021-02-13",1840,2),
(3,"2021-02-13",1,3),
(4,"2021-02-12",4700,1),
(5,"2021-02-12",1740,2),
(6,"2021-02-12",2,3);
select * from companystocks;
