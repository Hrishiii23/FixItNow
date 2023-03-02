package com.cdac.dayToDayServices.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.dayToDayServices.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {
	List<Address> findByUserId(int userId);
}
