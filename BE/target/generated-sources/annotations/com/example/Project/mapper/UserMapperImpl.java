package com.example.Project.mapper;

import com.example.Project.dto.response.UserResponse;
import com.example.Project.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
    date = "2024-12-25T20:56:58+0700",
=======
    date = "2024-12-24T19:52:17+0700",
>>>>>>> d3922fdab24b5223dea2f835a1d928f20102a536
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.41.0.v20241217-1506, environment: Java 17.0.13 (Eclipse Adoptium)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserResponse toUserDTO(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponse userResponse = new UserResponse();

        userResponse.setRefreshToken( user.getRefreshToken() );
        if ( user.getRefreshTokenExpired() != null ) {
            userResponse.setRefreshTokenExpired( user.getRefreshTokenExpired() );
        }
        userResponse.setUserId( user.getUserId() );
        userResponse.setUsername( user.getUsername() );

        return userResponse;
    }
}
