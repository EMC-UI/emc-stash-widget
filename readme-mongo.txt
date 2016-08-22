Setting Up Mongo ( For emc-stash-widget project )
================

https://www.mongodb.com/download-center#community

Download and Install mongodb on your system

Post Installation Instructions ( Mac OSX )

=======
Setting Up Mongo
================

Create Aliases for Mongo
---
add this to your ~/.profile
alias mongod=/Users/cromed/programs/mongodb-osx-x86_64-3.0.3/bin/mongod
alias mongo=/Users/cromed/programs/mongodb-osx-x86_64-3.0.3/bin/mongo
alias mongorestore=/Users/cromed/programs/mongodb-osx-x86_64-3.0.3/bin/mongorestore

Setup your data directory
---
sudo mkdir /data
sudo mkdir /data/db
sudo chmod -R 777 /data

Install the tally db
---
After you clone the emc-stash-widget, you will find the tally-db.tar file in the root of the repo.

Untar the db file:

tar -xvf tally-db.tar

Load the tally db into mongo

mongorestore

Use the mongo client to inspect the db

mongo
use tally
db.commits.update({},{$set{authorTimestamp:1471574668660}},{upsert:false,multi:true})

A single commit record
db.commits.findOne()

{
	"_id" : ObjectId("576d8b1a0ca1c01c07ffa22d"),
	"id" : "41bd82775fdc46a7609a0446aeaf98d9d2db7359",
	"displayId" : "41bd82775fd",
	"author" : {
		"name" : "pylem",
		"emailAddress" : "michael.pyle@emc.com",
		"id" : 161,
		"displayName" : "Michael Pyle",
		"active" : true,
		"slug" : "pylem",
		"type" : "NORMAL",
		"links" : {
			"self" : [
				{
					"href" : "http://ucas-stash.lss.emc.com/users/pylem"
				}
			]
		}
	},
	"authorTimestamp" : 1471574668660,
	"message" : "Group verified objectives by stages/epochs",
	"parents" : [
		{
			"id" : "426ed2992df0cb4d07981e90f12cc696a48c4815",
			"displayId" : "426ed2992df"
		}
	],
	"project" : {
		"key" : "SKUI",
		"id" : 101,
		"name" : "Skyline UI",
		"description" : "These are the repo modules that will become the HTML5 GUI (browser and mobile) for skyline.",
		"public" : true,
		"type" : "NORMAL",
		"links" : {
			"self" : [
				{
					"href" : "http://ucas-stash.lss.emc.com/projects/SKUI"
				}
			]
		}
	},
	"repo" : "skyline-ui-activities"
}


//A hack to get newer data. ( replace the authorTimestamp below with a newer one )
mongo
use tally
db.commits.update({},{$set:{authorTimestamp:1471574668660}},{upsert:false,multi:true})