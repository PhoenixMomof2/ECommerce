# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
CartIem.destroy_all
Cart.destroy_all
Item.destroy_all

User.create(username: "vintage007",password: "123qwerty!")

Item.create(name: "LOS ANGELES LAKERS", description: "MEN'S CREWNECK SWEATER", price: "280.00", image: "KN919004L_GY14_1391_2000x.jpeg")

Item.create(name: "KOBE BRYANT", description: "MEN'S VINTAGE T-SHIRT", price: "90.00", image: "e5d65ca783f593283f9f1a2285c55297.jpeg")

Item.create(name: "NEW YORK KNICKS", description: "MEN'S CREWNECK SWEATER", price: "280.00", image: "KN919004K__0450_2000x.jpeg")

Item.create(name: "GOLDEN STATE WARRIORS", description: "MEN'S CREWNECK SWEATER", price: "280.00", image: "KN919004W_GY14_1398_2000x.jpeg")

Item.create(name: "BOSTON CELTICS", description: "MEN'S CREWNECK SWEATER", price: "280.00", image: "KN919004C_GY14_1386_2000x.jpeg")

Item.create(name: "ATLANTA HAWKS", description: "MEN'S CREWNECK SWEATER", price: "280.00", image: "KN919004H_GY14_1393_2000x.jpeg")

Item.create(name: "PHOENIX SUNS", description: "MEN'S VINTAGE T-SHIRT", price: "80.00", image: "m_636f4bb4678c3a24ce07f4d2.jpeg")


Item.create(name: "CHICAGO BULLS VS. ORLANDO MAGIC", description: "1996 EASTERN CONFERENCE CHAMPIONSHIP", price: "40.00", image: "DSC08833_clipped_rev_1_large.jpeg")

Item.create(name: "JOHN STOCTON & KARL MALONE", description: "1993 ALL STAR MVPS", price: "40.00", image: "DSC08288_clipped_rev_4_clipped_rev_1_clipped_rev_1_grande.jpeg")

Item.create(name: "MICHAEL JORDAN", description: "1996 EASTERN CONFERENCE CHAMPIONSHIP", price: "35.00", image: "s-l500.jpeg")

Item.create(name: "UTAH JAZZ", description: "1998 NBA FINALS", price: "400.00", image: "Screen-Shot-2022-04-18-at-8.38.20-PM.jpeg")

Item.create(name: "SAN ANTONIO SPURS", description: "1996 ALL STAR WEEKEND", price: "40.00", image: "79940870_046_b.jpeg")

Item.create(name: "UTAH JAZZ", description: "1998 NBA FINALS", price: "400.00", image: "Screen-Shot-2022-04-18-at-8.38.20-PM.jpeg")

Item.create(name: "CLEVELAND CAVAILERS", description: "WORKOUT T-SHIRT", price: "50.00", image: "Cavs-0101025573-charcoal-flat.jpeg")

Item.create(name: "CLEVELAND CAVAILERS", description: "T-SHIRT", price: "40.00", image: "Cleveland-Cavs-On-Fire-01010556325-wine-flat.jpeg")

Item.create(name: "JAYLEN BROWN & JAYSON TATUM", description: "NBA JAM T-SHIRT", price: "35.00", image: "NBA-Jam-Celtics-Brown-And-Tatum-01010479013-green-flat.jpeg")
