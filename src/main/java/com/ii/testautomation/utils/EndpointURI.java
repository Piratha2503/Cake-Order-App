package com.ii.testautomation.utils;

/*
 * Contains all the rest EndPoint URL constants
 */
public final class EndpointURI {



    private static final String BASE_API_PATH = "/api/v1/";
    public static final String WEBSOCKET="/queue/percentage";
    private static final String SLASH = "/";
    private static final String SEARCH = "search";
    private static final String SEARCH_WITH_PAGE = "page";
    private static final String ID = "/{id}";
    private static final String EMAIL = "/{email}";
    private static final String IDS = "/{ids}";
    private static final String PASSWORD = "/{password}";

    //designs
    public static final String DESIGNS = BASE_API_PATH+"designs";

    //orders
    public static final String ORDERS = BASE_API_PATH+"orders";
    private EndpointURI() {
    }
}
