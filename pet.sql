SET NAMES UTF8;
DROP DATABASE IF EXISTS pet;
CREATE DATABASE pet CHARSET=UTF8;
USE pet;

/**网站信息表**/
CREATE TABLE pet_site_info(
	site_name VARCHAR(16),
	logo VARCHAR(64), 
	/**logo存储路径**/
	copyright VARCHAR(128)
);
/**插入数据**/
INSERT INTO pet_site_info VALUES("毛孩子","images/log.png","©毛孩子 2018 www.maohaizipet.com All Rights Reserved 京ICP备14057230号-1");

/**网站导航条目**/
CREATE TABLE pet_navbar_item(
	navname VARCHAR(16),
	navurl VARCHAR(64),
	navtitle VARCHAR(32)
);
INSERT INTO pet_navbar_item VALUES("首页","index.html","可爱的毛孩子"),
("宠物狗","index.html","可爱的毛孩子"),
("宠物猫","index.html","可爱的毛孩子"),
("奇趣小宠","index.html","可爱的毛孩子"),
("宠物用品","index.html","可爱的毛孩子"),
("宠物百科","index.html","可爱的毛孩子"),
("宠物店铺","index.html","可爱的毛孩子"),
("宠物集市","index.html","可爱的毛孩子"),
("宠物秀场","index.html","可爱的毛孩子"),
("知识问答","index.html","可爱的毛孩子");

/**首页轮播广告图**/
CREATE TABLE pet_carourel_item(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(128),  
	/**图片路径**/
	url VARCHAR(128), 
	/**图片指向的网址**/
	title VARCHAR(64)
);
INSERT INTO pet_carourel_item VALUES(1,"images/banner1.jpg","index.html","可爱的毛孩子"),
(2,"images/banner2.jpg","index.html","可爱的毛孩子"),
(3,"images/banner3.jpg","index.html","可爱的毛孩子"),
(4,"images/banner4.jpg","index.html","可爱的毛孩子"),
(5,"images/banner5.jpg","index.html","可爱的毛孩子");

/**商品列表**/
CREATE TABLE pet_new_product(
	pid INT NOT NULL,
	title VARCHAR(16),
	img VARCHAR(128),
	price DECIMAL(10,2)
);
INSERT INTO pet_new_product VALUES("1","德牧健康纯种幼犬","images/product/a4.jpg","8000.00"),
("2","精品高品质超萌可爱蝴蝶犬幼犬","images/product/a5.jpg","2600.00"),
("3","拉布拉多健康纯种幼犬","images/product/a6.jpg","4800.00"),
("4","精品高品质超萌可爱西高地幼犬","images/product/a7.jpg","3000.00");

/**注册信息表**/
CREATE TABLE pet_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,  /**uid自动增长**/
	uname VARCHAR(32),  
	upwd VARCHAR(32),
	phone VARCHAR(11),
	email VARCHAR(64),
	avatar VARCHAR(128),  /**头像图片路径**/
	user_name VARCHAR(32),  
	/**用户名**/
	gender INT  /**性别，0-女，1-男**/
);
INSERT INTO pet_user VALUES(NULL,"dingding","123456","15180055648","dingding@qq.com","images/avatar/defult.png","丁丁",1),
(NULL,"dangdang","123456","15180055648","dangdang@qq.com","images/avatar/defult.png","当当",1);

SELECT * FROM pet_site_info;
SELECT * FROM pet_new_product;
SELECT * FROM pet_user;