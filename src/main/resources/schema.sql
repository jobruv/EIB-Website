CREATE TABLE IF NOT EXISTS association (
    association_id SMALLSERIAL PRIMARY KEY,
    association_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS category (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS announcements (
    announcement_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    photo_url VARCHAR(500),
    more_info VARCHAR(500) NOT NULL,
    association_id SMALLINT NOT NULL,
    category_id INTEGER NOT NULL,
    CONSTRAINT fk_association FOREIGN KEY (association_id) REFERENCES association(association_id),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category(category_id)
);