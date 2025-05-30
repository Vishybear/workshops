"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Module extends pulumi.ComponentResource {
    /**
     * Returns true if the given object is an instance of Module.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Module.__pulumiType;
    }
    /**
     * Create a Module resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["acceleration_status"] = args ? args.acceleration_status : undefined;
            resourceInputs["access_log_delivery_policy_source_accounts"] = args ? args.access_log_delivery_policy_source_accounts : undefined;
            resourceInputs["access_log_delivery_policy_source_buckets"] = args ? args.access_log_delivery_policy_source_buckets : undefined;
            resourceInputs["acl"] = args ? args.acl : undefined;
            resourceInputs["allowed_kms_key_arn"] = args ? args.allowed_kms_key_arn : undefined;
            resourceInputs["analytics_configuration"] = args ? args.analytics_configuration : undefined;
            resourceInputs["analytics_self_source_destination"] = args ? args.analytics_self_source_destination : undefined;
            resourceInputs["analytics_source_account_id"] = args ? args.analytics_source_account_id : undefined;
            resourceInputs["analytics_source_bucket_arn"] = args ? args.analytics_source_bucket_arn : undefined;
            resourceInputs["attach_access_log_delivery_policy"] = args ? args.attach_access_log_delivery_policy : undefined;
            resourceInputs["attach_analytics_destination_policy"] = args ? args.attach_analytics_destination_policy : undefined;
            resourceInputs["attach_deny_incorrect_encryption_headers"] = args ? args.attach_deny_incorrect_encryption_headers : undefined;
            resourceInputs["attach_deny_incorrect_kms_key_sse"] = args ? args.attach_deny_incorrect_kms_key_sse : undefined;
            resourceInputs["attach_deny_insecure_transport_policy"] = args ? args.attach_deny_insecure_transport_policy : undefined;
            resourceInputs["attach_deny_ssec_encrypted_object_uploads"] = args ? args.attach_deny_ssec_encrypted_object_uploads : undefined;
            resourceInputs["attach_deny_unencrypted_object_uploads"] = args ? args.attach_deny_unencrypted_object_uploads : undefined;
            resourceInputs["attach_elb_log_delivery_policy"] = args ? args.attach_elb_log_delivery_policy : undefined;
            resourceInputs["attach_inventory_destination_policy"] = args ? args.attach_inventory_destination_policy : undefined;
            resourceInputs["attach_lb_log_delivery_policy"] = args ? args.attach_lb_log_delivery_policy : undefined;
            resourceInputs["attach_policy"] = args ? args.attach_policy : undefined;
            resourceInputs["attach_public_policy"] = args ? args.attach_public_policy : undefined;
            resourceInputs["attach_require_latest_tls_policy"] = args ? args.attach_require_latest_tls_policy : undefined;
            resourceInputs["availability_zone_id"] = args ? args.availability_zone_id : undefined;
            resourceInputs["block_public_acls"] = args ? args.block_public_acls : undefined;
            resourceInputs["block_public_policy"] = args ? args.block_public_policy : undefined;
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["bucket_prefix"] = args ? args.bucket_prefix : undefined;
            resourceInputs["control_object_ownership"] = args ? args.control_object_ownership : undefined;
            resourceInputs["cors_rule"] = args ? args.cors_rule : undefined;
            resourceInputs["create_bucket"] = args ? args.create_bucket : undefined;
            resourceInputs["data_redundancy"] = args ? args.data_redundancy : undefined;
            resourceInputs["expected_bucket_owner"] = args ? args.expected_bucket_owner : undefined;
            resourceInputs["force_destroy"] = args ? args.force_destroy : undefined;
            resourceInputs["grant"] = args ? args.grant : undefined;
            resourceInputs["ignore_public_acls"] = args ? args.ignore_public_acls : undefined;
            resourceInputs["intelligent_tiering"] = args ? args.intelligent_tiering : undefined;
            resourceInputs["inventory_configuration"] = args ? args.inventory_configuration : undefined;
            resourceInputs["inventory_self_source_destination"] = args ? args.inventory_self_source_destination : undefined;
            resourceInputs["inventory_source_account_id"] = args ? args.inventory_source_account_id : undefined;
            resourceInputs["inventory_source_bucket_arn"] = args ? args.inventory_source_bucket_arn : undefined;
            resourceInputs["is_directory_bucket"] = args ? args.is_directory_bucket : undefined;
            resourceInputs["lifecycle_rule"] = args ? args.lifecycle_rule : undefined;
            resourceInputs["location_type"] = args ? args.location_type : undefined;
            resourceInputs["logging"] = args ? args.logging : undefined;
            resourceInputs["metric_configuration"] = args ? args.metric_configuration : undefined;
            resourceInputs["object_lock_configuration"] = args ? args.object_lock_configuration : undefined;
            resourceInputs["object_lock_enabled"] = args ? args.object_lock_enabled : undefined;
            resourceInputs["object_ownership"] = args ? args.object_ownership : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["putin_khuylo"] = args ? args.putin_khuylo : undefined;
            resourceInputs["replication_configuration"] = args ? args.replication_configuration : undefined;
            resourceInputs["request_payer"] = args ? args.request_payer : undefined;
            resourceInputs["restrict_public_buckets"] = args ? args.restrict_public_buckets : undefined;
            resourceInputs["server_side_encryption_configuration"] = args ? args.server_side_encryption_configuration : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["transition_default_minimum_object_size"] = args ? args.transition_default_minimum_object_size : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["versioning"] = args ? args.versioning : undefined;
            resourceInputs["website"] = args ? args.website : undefined;
            resourceInputs["s3_bucket_arn"] = undefined /*out*/;
            resourceInputs["s3_bucket_bucket_domain_name"] = undefined /*out*/;
            resourceInputs["s3_bucket_bucket_regional_domain_name"] = undefined /*out*/;
            resourceInputs["s3_bucket_hosted_zone_id"] = undefined /*out*/;
            resourceInputs["s3_bucket_id"] = undefined /*out*/;
            resourceInputs["s3_bucket_lifecycle_configuration_rules"] = undefined /*out*/;
            resourceInputs["s3_bucket_policy"] = undefined /*out*/;
            resourceInputs["s3_bucket_region"] = undefined /*out*/;
            resourceInputs["s3_bucket_website_domain"] = undefined /*out*/;
            resourceInputs["s3_bucket_website_endpoint"] = undefined /*out*/;
            resourceInputs["s3_directory_bucket_arn"] = undefined /*out*/;
            resourceInputs["s3_directory_bucket_name"] = undefined /*out*/;
        }
        else {
            resourceInputs["s3_bucket_arn"] = undefined /*out*/;
            resourceInputs["s3_bucket_bucket_domain_name"] = undefined /*out*/;
            resourceInputs["s3_bucket_bucket_regional_domain_name"] = undefined /*out*/;
            resourceInputs["s3_bucket_hosted_zone_id"] = undefined /*out*/;
            resourceInputs["s3_bucket_id"] = undefined /*out*/;
            resourceInputs["s3_bucket_lifecycle_configuration_rules"] = undefined /*out*/;
            resourceInputs["s3_bucket_policy"] = undefined /*out*/;
            resourceInputs["s3_bucket_region"] = undefined /*out*/;
            resourceInputs["s3_bucket_website_domain"] = undefined /*out*/;
            resourceInputs["s3_bucket_website_endpoint"] = undefined /*out*/;
            resourceInputs["s3_directory_bucket_arn"] = undefined /*out*/;
            resourceInputs["s3_directory_bucket_name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Module.__pulumiType, name, resourceInputs, opts, true /*remote*/, utilities.getPackage());
    }
}
exports.Module = Module;
/** @internal */
Module.__pulumiType = 'bucketmod:index:Module';
//# sourceMappingURL=module.js.map