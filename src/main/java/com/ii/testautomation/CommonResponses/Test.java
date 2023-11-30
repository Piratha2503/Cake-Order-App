package com.ii.testautomation.CommonResponses;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Test {

    private boolean success;

    public Test(boolean msg){

        this.success = msg;
    }

}
