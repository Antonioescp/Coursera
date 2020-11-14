# locate all Races with Racer names
# create a new Racer and insert the Race as the first element 
# -within an array within Racer called races
# remove the Race

require './racer.rb'

Racer.reset

racers = Racer.racers_collection
races = Racer.races_collection

races.find(name: {"$exists": true}).each do |r|
	result=racers.update_one({name: r[:name]},
							 {name: r[:name],
							  races: [
							  		  {
							  		  	_id: r[:_id],
									   	number: r[:number],
									   	group: r[:group],
									   	time: r[:time]
									  }
									 ]},
							 {upsert: true})
	races.find(_id: r[:_id]).delete_one
end

p races.find.count
p racers.find.count