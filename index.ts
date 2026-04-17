import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.Bucket("s3-firstBucket-pulumi", {
   bucket: 'marksoulz-s3-firstBucket-pulumi',
   tags: {
      IAC: "true",
   },
});

const secondBucket = new aws.s3.Bucket("s3-secondBucket-pulumi", {
   bucket: 'marksoulz-s3-secondBucket-pulumi',
   tags: {
      IAC: "true",
   },
});

const ecr = new aws.ecr.Repository("ecr-pulumi", {
   name: "ecr-pulumi",
   imageTagMutability: "IMMUTABLE",
   tags: {
      IAC: "true"
   }
})

export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketRegion = secondBucket.region;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepoURL = ecr.repositoryUrl;
