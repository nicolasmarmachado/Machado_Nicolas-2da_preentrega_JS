const rubros=['ferreteria', 'comidas', 'tecnologia', 'kioscos', 'ropa', 'supermercados']

const ferret=[
    {negocio: 'Baleis', articulo: 'Tornillos', precio: 10},
    {negocio: 'Baleis', articulo: 'Clavos', precio: 5},
    {negocio: 'Baleis', articulo: 'Martillo', precio: 100},
    {negocio: 'Ghilardi', articulo: 'Tornillos', precio: 10},
    {negocio: 'Ghilardi', articulo: 'Clavos', precio: 6},
    {negocio: 'Ghilardi', articulo: 'Martillo', precio: 110},
    {negocio: 'El Martillo Veloz', articulo: 'Tornillos', precio: 12},
    {negocio: 'El Martillo Veloz', articulo: 'Clavos', precio: 5},
    {negocio: 'El Martillo Veloz', articulo: 'Martillo', precio: 100},
    {negocio: 'La llave Dorada', articulo: 'Tornillos', precio: 9},
    {negocio: 'La llave Dorada', articulo: 'Clavos', precio: 4},
    {negocio: 'La llave Dorada', articulo: 'Martillo', precio: 115},
    {negocio: 'El tornillo fiel,', articulo: 'Tornillos', precio: 10},
    {negocio: 'El tornillo fiel,', articulo: 'Clavos', precio: 7},
    {negocio: 'El tornillo fiel,', articulo: 'Martillo', precio: 120}
]

const comida=[
    {negocio: 'Rica Pizza', articulo: 'Pizza', precio: 1000},
    {negocio: 'Rica Pizza', articulo: 'Empanadas', precio: 200},
    {negocio: 'Rica Pizza', articulo: 'Lomitos', precio: 1500},
    {negocio: 'La buoca Pizza', articulo: 'Pizza', precio: 1200},
    {negocio: 'La buoca Pizza', articulo: 'Empanadas', precio: 220},
    {negocio: 'La buoca Pizza', articulo: 'Lomitos', precio: 1700},
    {negocio: 'Abbey Road', articulo: 'Pizza', precio: 1100},
    {negocio: 'Abbey Road', articulo: 'Empanadas', precio: 230},
    {negocio: 'Abbey Road', articulo: 'Lomitos', precio: 1600},
    {negocio: 'La Fraternal', articulo: 'Pizza', precio: 1000},
    {negocio: 'La Fraternal', articulo: 'Empanadas', precio: 200},
    {negocio: 'La Fraternal', articulo: 'Lomitos', precio: 1650},
    {negocio: 'Elios', articulo: 'Pizza', precio: 1150},
    {negocio: 'Elios', articulo: 'Empanadas', precio: 225},
    {negocio: 'Elios', articulo: 'Lomitos', precio: 1600},

]

const kiosco=[
    {negocio: 'Lola', articulo: 'Gaseosas', precio: 400},
    {negocio: 'Lola', articulo: 'Cigarrillos', precio: 200},
    {negocio: 'Lola', articulo: 'Golosinas', precio: 100},
    {negocio: 'Plaza', articulo: 'Gaseosas', precio: 450},
    {negocio: 'Plaza ', articulo: 'Cigarrillos', precio: 250},
    {negocio: 'Plaza', articulo: 'Golosinas', precio: 110},
    {negocio: 'Elii', articulo: 'Gaseosas', precio: 500},
    {negocio: 'Elii', articulo: 'Cigarrillos', precio: 220},
    {negocio: 'Elii', articulo: 'Golosinas', precio: 105},
    {negocio: 'Andrea', articulo: 'Gaseosas', precio: 430},
    {negocio: 'Andrea', articulo: 'Cigarrillos', precio: 230},
    {negocio: 'Andrea', articulo: 'Golosinas', precio: 100},
    {negocio: 'Mary', articulo: 'Gaseosas', precio: 475},
    {negocio: 'Mary', articulo: 'Cigarrillos', precio: 240},
    {negocio: 'Mary', articulo: 'Golosinas', precio: 95},
]

const rop=[
    {negocio: 'Anastasia', articulo: 'Camisa', precio: 5000},
    {negocio: 'Anastasia', articulo: 'Pantalón', precio: 7000},
    {negocio: 'Anastasia', articulo: 'Remera', precio: 3500},
    {negocio: 'Moon', articulo: 'Camisa', precio: 6500},
    {negocio: 'Moon', articulo: 'Pantalón', precio: 7500},
    {negocio: 'Moon', articulo: 'Remera', precio: 4000},
    {negocio: 'Osiris', articulo: 'Camisa', precio: 4500},
    {negocio: 'Osiris', articulo: 'Pantalón', precio: 6600},
    {negocio: 'Osiris', articulo: 'Remera', precio: 3000},
    {negocio: 'Trendy', articulo: 'Camisa', precio: 6600},
    {negocio: 'Trendy', articulo: 'Pantalón', precio: 8000},
    {negocio: 'Trendy', articulo: 'Remera', precio: 3500},
    {negocio: 'Mecs', articulo: 'Camisa', precio: 4500},
    {negocio: 'Mecs', articulo: 'Pantalón', precio: 5500},
    {negocio: 'Mecs', articulo: 'Remera', precio: 2800}
]

const supermercado=[
    {negocio: 'Chiaro', articulo: 'Jabón en polvo', precio: 2000},
    {negocio: 'Chiaro', articulo: 'Papel higiénico', precio: 600},
    {negocio: 'Chiaro', articulo: 'Dentífrico', precio: 400},
    {negocio: 'Los Chinos', articulo: 'Jabón en polvo', precio: 2500},
    {negocio: 'Los Chinos', articulo: 'Papel higiénico', precio: 650},
    {negocio: 'Los Chinos', articulo: 'Dentífrico', precio: 450},
    {negocio: 'Yamila', articulo: 'Jabón en polvo', precio: 2300},
    {negocio: 'Yamila', articulo: 'Papel higiénico', precio: 550},
    {negocio: 'Yamila', articulo: 'Dentífrico', precio: 420},
    {negocio: 'La Suiza', articulo: 'Jabón en polvo', precio: 2400},
    {negocio: 'La Suiza', articulo: 'Papel higiénico', precio:570},
    {negocio: 'La Suiza', articulo: 'Dentífrico', precio:430 },
    {negocio: 'Eliré', articulo: 'Jabón en polvo', precio: 2200},
    {negocio: 'Eliré', articulo: 'Papel higiénico', precio: 620},
    {negocio: 'Eliré', articulo: 'Dentífrico', precio: 430}
]

const tecno=[
    {negocio: 'Celular Service', articulo: 'Celulares', precio: 60000},
    {negocio: 'Celular Service', articulo: 'Tablet', precio: 45000},
    {negocio: 'Celular Service', articulo: 'Notebook', precio: 200000},
    {negocio: 'Fix', articulo: 'Celulares', precio: 55000},
    {negocio: 'Fix', articulo: 'Tablet', precio: 35000},
    {negocio: 'Fix', articulo: 'Notebook', precio: 180000},
    {negocio: 'Digital World', articulo: 'Celulares', precio: 70000},
    {negocio: 'Digital World', articulo: 'Tablet', precio: 55000},
    {negocio: 'Digital World', articulo: 'Notebook', precio: 220000},
    {negocio: 'Relojeria Valhalla', articulo: 'Celulares', precio: 65000},
    {negocio: 'Relojeria Valhalla', articulo: 'Tablet', precio: 60000},
    {negocio: 'Relojeria Valhalla', articulo: 'Notebook', precio: 220000},
    {negocio: 'Horus', articulo: 'Celulares', precio: 62000},
    {negocio: 'Horus', articulo: 'Tablet', precio: 40000},
    {negocio: 'Horus', articulo: 'Notebook', precio: 230000},
]