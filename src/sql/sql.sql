CREATE TABLE tb_usuarioclientes (
    usuclicodigo SERIAL PRIMARY KEY,
    usuclinome VARCHAR(200) NOT NULL,
    usucliemail VARCHAR(200) NOT NULL,
    usuclisenha VARCHAR(200) NOT NULL
);

CREATE TABLE tb_usuarioAdministradores (
    usuadmcodigo SERIAL PRIMARY KEY,
    usuadmnome VARCHAR(200) NOT NULL,
    usuadmemail VARCHAR(200) NOT NULL,
    usuadmsenha VARCHAR(200) NOT NULL
);

CREATE TABLE tb_produtos( 
    procodigo SERIAL PRIMARY KEY,
    pronome varchar(200) not null,
    proimagem varchar(400) not null,
    prodescricao varchar(1000) not null,
    propreco numeric(10,2) not null,
   	catcodigo int not null,
    FOREIGN KEY (catcodigo) REFERENCES tb_categorias (catcodigo)
);

CREATE TABLE tb_categorias ( 
   catcodigo SERIAL PRIMARY KEY,
   catnome varchar(200) not null
);

CREATE TABLE tb_pedidos( 
    pedcodigo SERIAL PRIMARY KEY,
    procodigo int not null,
    prourl varchar(1000) not null,
    propreco varchar(200) not null,
    usuclicodigo int not null,
    pedstatus varchar(200) not null,
    FOREIGN KEY (procodigo) REFERENCES tb_produtos (procodigo),
    FOREIGN KEY (usuclicodigo) REFERENCES tb_usuarioclientes (usuclicodigo)
);