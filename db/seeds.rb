# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Phylum.destroy_all

require "faker"

u1 = User.create(email:"test@test.com", password: 123456)

10.times do
  User.create(
    email:Faker::Internet.unique.email, 
    password: Faker::Internet.password(min_length: 6),
  )
end

fish = Phylum.create(name: "fish")
invertebrates = Phylum.create(name: "invertebrates")

sharks = fish.groups.create(name:"sharks")
skates = fish.groups.create(name:"skates")
flatfish = fish.groups.create(name:"flatfish")

sharks.species.create(common_name: "salmon shark", scientific_name: "Lamna ditropis", rcode: 232, image: "/Images/Salmon_Shark.JPG", description: "The great white sharks smaller cousin. Approximately 6 feet in length and lighter grey in color.")
sharks.species.create(common_name: "spiny dogfish", scientific_name: "Squalus acanthius", rcode: 310, image: "/Images/spiny_dogfish.jpg", description: "Smallest of the sharks with distinctive spikes behind dorsal fins.")
sharks.species.create(common_name: "sleeper shark", scientific_name: "Samniosus pacificus", rcode: 321, image: "/Images/Sleeper_Shark.jpg", description: "Largest of the sharks. Dark coloration and slow moving. Appears to lose its shape on deck.")