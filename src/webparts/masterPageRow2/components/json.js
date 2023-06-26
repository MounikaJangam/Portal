function i() {
    var io = { "actor": { "id": "0oa13dmn0koMmm1ta5d7", "type": "PublicClientApp", "alternateId": "0oa13dmn0koMmm1ta5d7", "displayName": "Mosaic", "detailEntry": null }, "client": { "userAgent": { "rawUserAgent": "Expanse, a Palo Alto Networks company, searches across the global IPv4 space multiple times per day to identify customers&#39; presences on the Internet. If you would like to be excluded from our scans, please send IP addresses/domains to: scaninfo@paloaltonetworks.com", "os": "Chrome OS", "browser": "UNKNOWN" }, "zone": "null", "device": "Computer", "id": "0oa13dmn0koMmm1ta5d7", "ipAddress": "35.203.211.211", "geographicalContext": { "city": "London", "state": "England", "country": "United Kingdom", "postalCode": "EC4N", "geolocation": { "lat": 51.5095, "lon": -0.0955 } } }, "device": null, "authenticationContext": { "authenticationProvider": null, "credentialProvider": null, "credentialType": null, "issuer": null, "interface": null, "authenticationStep": 0, "externalSessionId": "unknown" }, "displayMessage": "OIDC authorization request", "eventType": "app.oauth2.authorize", "outcome": { "result": "FAILURE", "reason": "illegal_redirect_uri_enhanced" }, "published": "2023-05-05T00:56:28.937Z", "securityContext": { "asNumber": 396982, "asOrg": "google", "isp": "google", "domain": "googleusercontent.com", "isProxy": false }, "severity": "INFO", "debugContext": { "debugData": { "redirectUri": "https://52.9.128.237/Authentication/login-callback", "grantedScopes": "", "responseMode": "form_post", "responseType": "code id_token", "requestId": "ZFRUPEXSEcMgX4jmIHJNjAAACi4", "dtHash": "0e17d0d4f6486df1d5c9154d54b1480146570bf9efc17c94a8acd70f484a4cbd", "requestUri": "/oauth2/v1/authorize", "requestedScopes": "openid, profile, email", "state": "OpenIdConnect.AuthenticationProperties=od6AZj8Em2p-kMBNmoiZUGcKmHirpu6gZm_0-0CITOcgmnBlHXFmT3ZqobCEB3Iasz4D8A5d_4iVSNMZcosk9q6kFBiHPboBQZxKS_zdKkA", "threatSuspected": "false", "url": "/oauth2/v1/authorize?client_id=0oa13dmn0koMmm1ta5d7&response_mode=form_post&response_type=code+id_token&scope=openid+profile+email&state=OpenIdConnect.AuthenticationProperties%3Dod6AZj8Em2p-kMBNmoiZUGcKmHirpu6gZm_0-0CITOcgmnBlHXFmT3ZqobCEB3Iasz4D8A5d_4iVSNMZcosk9q6kFBiHPboBQZxKS_zdKkA&nonce=638188449855772926.YjExNmNkNTctYWE3Ni00NDZmLTk0MDctNDhjODRlNGNkYjIwYThmMGY3MTQtYzU0Ni00NDY2LWFlMjMtZWI2MzNlZmZlMzMx&redirect_uri=https%3A%2F%2F52.9.128.237%2FAuthentication%2Flogin-callback" } }, "legacyEventType": "app.oauth2.authorize_failure", "transaction": { "type": "WEB", "id": "ZFRUPEXSEcMgX4jmIHJNjAAACi4", "detail": {} }, "uuid": "ab357fe9-eadf-11ed-826c-f5d0190a4642", "version": "0", "request": { "ipChain": [{ "ip": "35.203.211.211", "geographicalContext": { "city": "London", "state": "England", "country": "United Kingdom", "postalCode": "EC4N", "geolocation": { "lat": 51.5095, "lon": -0.0955 } }, "version": "V4", "source": null }] }, "target": null }
    var ii = { "timestamp": "2023-05-05T00:57:22.654Z", "user": "Diana Munoz", "account": "dmunoz@ideayabio.com", "source_ip": "174.62.88.247", "service": "Microsoft Office 365", "sso_provider": "OKTA", "geoip_city": "Redwood City", "geoip_country_code": "US", "geoip_country_name": "United States", "geoip_organization": "Comcast Cable", "geoip_region": "CA", "source_json": { "actor": { "id": "00u10eqxyfA9PPt5M5d7", "type": "User", "alternateId": "dmunoz@ideayabio.com", "displayName": "Diana Munoz", "detailEntry": null }, "client": { "userAgent": { "rawUserAgent": "Windows-AzureAD-Authentication-Provider/1.0", "os": "Windows", "browser": "UNKNOWN" }, "zone": "null", "device": "Computer", "id": null, "ipAddress": "174.62.88.247", "geographicalContext": { "city": "Redwood City", "state": "California", "country": "United States", "postalCode": "94065", "geolocation": { "lat": 37.5313, "lon": -122.2501 } } }, "device": null, "authenticationContext": { "authenticationProvider": null, "credentialProvider": null, "credentialType": null, "issuer": null, "interface": null, "authenticationStep": 0, "externalSessionId": "102FlEtfARwSyO0vcDNP4tlxw" }, "displayMessage": "User single sign on to app", "eventType": "user.authentication.sso", "outcome": { "result": "SUCCESS", "reason": null }, "published": "2023-05-05T00:57:22.654Z", "securityContext": { "asNumber": 7922, "asOrg": "comcast", "isp": "comcast", "domain": "comcast.net", "isProxy": false }, "severity": "INFO", "debugContext": { "debugData": { "authnRequestId": "ZFRUcdJj5ItzMGh-JvcHTQAAApw", "requestId": "ZFRUcdJj5ItzMGh-JvcHTQAAApw", "dtHash": "e29db0788f3af63b916f4131a2a180fcd8d87658e03136651c079b26bfda7cd4", "requestUri": "/app/office365/exk13doa34oVi0EwD5d7/sso/wsfed/username13", "threatSuspected": "false", "url": "/app/office365/exk13doa34oVi0EwD5d7/sso/wsfed/username13?" } }, "legacyEventType": "app.auth.sso", "transaction": { "type": "WEB", "id": "ZFRUcdJj5ItzMGh-JvcHTQAAApw", "detail": {} }, "uuid": "cb3a10a8-eadf-11ed-9e20-3b4b413463d6", "version": "0", "request": { "ipChain": [{ "ip": "174.62.88.247", "geographicalContext": { "city": "Redwood City", "state": "California", "country": "United States", "postalCode": "94065", "geolocation": { "lat": 37.5313, "lon": -122.2501 } }, "version": "V4", "source": null }] }, "target": [{ "id": "0oa13doa35fCDOEE25d7", "type": "AppInstance", "alternateId": "Office 365 - ", "displayName": "Microsoft Office 365", "detailEntry": { "signOnModeType": "SAML_1_1" } }, { "id": "0ua13jgqg83Fc1wjS5d7", "type": "AppUser", "alternateId": "dmunoz@ideayabio.com", "displayName": "Diana Munoz", "detailEntry": null }] }, "r7_context": { "user": { "type": "user", "rrn": "rrn:uba:us:80894939-336a-4278-bfd2-7e9e38c8f747:user:UXJUWE59AMJG", "name": "Diana Munoz" }, "account": { "type": "account", "rrn": "rrn:uba:us:80894939-336a-4278-bfd2-7e9e38c8f747:account:YPI8N31CJV1F", "name": "dmunoz@ideayabio.com" } } }
}