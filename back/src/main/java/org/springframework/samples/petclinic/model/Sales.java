package org.springframework.samples.petclinic.model;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name = "sales")
public class Sales extends BaseEntity {

	@Column(name = "id")
	@NotEmpty
	protected int id;

	@Column(name = "title")
	protected String title;

	@Column(name = "description")
	protected String description;

	@Column(name = "discount")
	protected Double discount;

	@Column(name = "expireDate")
	protected Date expireDate;

	public Integer getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Date getExpireDate() {
		return expireDate;
	}

	public void setExpireDate(Date expireDate) {
		this.expireDate = expireDate;
	}

}